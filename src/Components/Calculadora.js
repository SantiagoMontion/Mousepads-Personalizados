import React from "react";
import "../css/MousepadContainer.css";

const rolloData = {
  Pro: { width: 125, pricePerMeter: 36145 },
  Clasic: { width: 140, pricePerMeter: 23820 },
  Alfombra: { width: 154, pricePerMeter: 25000 },
};

// Ajuste de medidas basado en diferencia total
const adjustMeasurement = (original, reference) => {
  const lowerBound = Math.floor(reference / 10) * 10;
  const upperBound = lowerBound + 10;

  // Solo se ajusta si la diferencia total supera los 5 cm
  if (Math.abs(original - lowerBound) + Math.abs(original - upperBound) < 5) {
    return original;
  }

  return Math.abs(original - lowerBound) < Math.abs(original - upperBound)
    ? lowerBound
    : upperBound;
};

const Calculadora = ({ width, height, mode, setPrice }) => {
  if (!rolloData[mode]) {
    return <p>Modo no válido</p>;
  }

  const { width: rolloWidth, pricePerMeter } = rolloData[mode];
  const rolloWidthM = rolloWidth / 100;

  // Aplicar ajuste de medidas combinando ancho y alto
  const normalizedWidthCm = adjustMeasurement(width, width);
  const normalizedHeightCm = adjustMeasurement(height, height);

  const pieceWidthNormalized = normalizedWidthCm / 100;
  const pieceHeightNormalized = normalizedHeightCm / 100;

  // Cálculo de unidades por metro
  const unitsHorizontal_norm =
    Math.floor(rolloWidthM / pieceWidthNormalized) *
    Math.floor(1 / pieceHeightNormalized);
  const unitsRotated_norm =
    Math.floor(rolloWidthM / pieceHeightNormalized) *
    Math.max(Math.floor(1 / pieceWidthNormalized), 1);
  const defaultUnitsPerMeter_norm = Math.max(
    unitsHorizontal_norm,
    unitsRotated_norm
  );
  const unitsPerMeter_norm =
    defaultUnitsPerMeter_norm < 1 ? 1 : defaultUnitsPerMeter_norm;

  const defaultPricePerUnit_norm = pricePerMeter / unitsPerMeter_norm;

  const isExactAlfombra_norm =
    mode === "Alfombra" &&
    pieceWidthNormalized === 1.4 &&
    pieceHeightNormalized === 1;
  const useRotatedModel_norm =
    !isExactAlfombra_norm &&
    pieceWidthNormalized > 1 &&
    pieceWidthNormalized < rolloWidthM;

  let finalCostPerUnitYield_norm;
  if (useRotatedModel_norm) {
    const piecesPerRow_norm = Math.floor(rolloWidthM / pieceHeightNormalized);
    const baseCostPerUnit_norm = pricePerMeter / piecesPerRow_norm;
    const extraCost_norm =
      ((pieceWidthNormalized - 1) * pricePerMeter) / piecesPerRow_norm;
    finalCostPerUnitYield_norm = baseCostPerUnit_norm + extraCost_norm;
  } else {
    finalCostPerUnitYield_norm = defaultPricePerUnit_norm;
  }

  const multiplier =
    mode === "Clasic" ? 2.7 : mode === "Pro" ? 3.2 : 3.2;
  const yieldPrice_norm = finalCostPerUnitYield_norm * multiplier;

  const costPerM2_norm = pricePerMeter / rolloWidthM;
  const area_norm = pieceWidthNormalized * pieceHeightNormalized;
  const areaPrice_norm = area_norm * costPerM2_norm * multiplier;

  let baseFinalPrice_norm = Math.min(yieldPrice_norm, areaPrice_norm);

  let baselineArea_norm;
  if (mode === "Pro") {
    baselineArea_norm = 0.26;
  } else {
    baselineArea_norm = 0.36;
  }
  const surchargeFactor = 5000;
  const extraArea_norm = Math.max(0, area_norm - baselineArea_norm);
  const areaSurcharge_norm = surchargeFactor * extraArea_norm;

  let clientFinalPrice_norm = baseFinalPrice_norm + areaSurcharge_norm;

  const extraCharge =
    (width > normalizedWidthCm ? 500 : 0) +
    (height > normalizedHeightCm ? 500 : 0);

  clientFinalPrice_norm += extraCharge;

  if (width < 40 && height < 40) {
    clientFinalPrice_norm *= 1.3;
  }

  const roundPrice = (price) => Math.ceil(price / 500) * 500;
  const clientFinalPriceRounded = roundPrice(clientFinalPrice_norm);

  if (setPrice && typeof setPrice === "function") {
    setPrice(clientFinalPriceRounded);
  } else {
    console.error("setPrice no es una función", setPrice);
  }

  return (
    <div>
      <p className="p-calcu">
        ${clientFinalPriceRounded.toLocaleString("es-AR", {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        })}
      </p>
      
    </div>
  );
};

export default Calculadora;
