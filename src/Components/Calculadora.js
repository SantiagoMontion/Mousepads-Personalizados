import React from "react";
import "../css/MousepadContainer.css";

const rolloData = {
  Pro: { width: 125, pricePerMeter: 35445 },
  Clasic: { width: 140, pricePerMeter: 23820 },
  Alfombra: { width: 154, pricePerMeter: 25000 },
};

const Calculadora = ({ width, height, mode, setPrice }) => {
  if (!rolloData[mode]) {
    return <p>Modo no válido</p>;
  }
  
  // Datos del rollo: se obtiene el ancho (en cm) y se convierte a metros.
  const { width: rolloWidth, pricePerMeter } = rolloData[mode];
  const rolloWidthM = rolloWidth / 100;
  
  // ----- Normalización de medidas para tratar medidas similares -----
  // Se redondea hacia abajo al múltiplo de 10.
  const normalizedWidthCm = Math.floor(width / 10) * 10;
  const normalizedHeightCm = Math.floor(height / 10) * 10;
  
  // Convertir las medidas normalizadas (en cm) a metros para los cálculos base.
  const pieceWidthNormalized = normalizedWidthCm / 100;
  const pieceHeightNormalized = normalizedHeightCm / 100;
  
  // --- Cálculo yield (eficiencia de corte) usando las dimensiones normalizadas ---
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
  
  // Se mantiene la lógica del modelo rotado para dimensiones normalizadas.
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
  
  // Multiplicador (se conserva la misma lógica original).
  const multiplier =
    mode === "Clasic" ? 2.7 : mode === "Pro" ? 3.2 : 3.8;
  const yieldPrice_norm = finalCostPerUnitYield_norm * multiplier;
  
  // --- Cálculo basado en el área (usando dimensiones normalizadas) ---
  const costPerM2_norm = pricePerMeter / rolloWidthM;
  const area_norm = pieceWidthNormalized * pieceHeightNormalized;
  const areaPrice_norm = area_norm * costPerM2_norm * multiplier;
  
  // Se toma el menor entre yieldPrice y areaPrice.
  let baseFinalPrice_norm = Math.min(yieldPrice_norm, areaPrice_norm);
  
  // --- Recargo por aumento de área extra ---
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
  
  // ----- Recargo por dimensiones mayores a las medidas normalizadas -----
  // Si la dimensión ingresada es mayor que la normalizada, se suma 500 por cada dimensión.
  const extraCharge =
    (width > normalizedWidthCm ? 500 : 0) +
    (height > normalizedHeightCm ? 500 : 0);
  
  clientFinalPrice_norm += extraCharge;
  
  // ----- Condición adicional para piezas muy chicas -----
  if (width < 40 && height < 40) {
    clientFinalPrice_norm *= 1.3;
  }
  
  // ----- Redondeo siempre hacia arriba al siguiente múltiplo de 500 -----
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
      {mode === "Alfombra" && (
        <p className="alfombra-text">50% off en la segunda unidad</p>
      )}
      {/*
      <p>Área (normalizada): {area_norm.toFixed(2)} m² (baseline: {baselineArea_norm} m²)</p>
      <p>YieldPrice (normalizado): ${yieldPrice_norm.toFixed(2)} vs. AreaPrice: ${areaPrice_norm.toFixed(2)}</p>
      <p>Recargo (area): ${areaSurcharge_norm.toFixed(2)}</p>
      */}
    </div>
  );
};

export default Calculadora;
