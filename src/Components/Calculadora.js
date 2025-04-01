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
  
  // Convertir las medidas de la pieza (en cm) a metros.
  const pieceWidth = width / 100;
  const pieceHeight = height / 100;

  // Detecta si se eligió exactamente 140x100 en modo Alfombra.
  const isExactAlfombra = mode === "Alfombra" && pieceWidth === 1.4 && pieceHeight === 1;
  
  // --- Cálculo yield (eficiencia de corte) ---
  const unitsHorizontal =
    Math.floor(rolloWidthM / pieceWidth) * Math.floor(1 / pieceHeight);
  const unitsRotated =
    Math.floor(rolloWidthM / pieceHeight) * Math.max(Math.floor(1 / pieceWidth), 1);
  const defaultUnitsPerMeter = Math.max(unitsHorizontal, unitsRotated);
  const unitsPerMeter = defaultUnitsPerMeter < 1 ? 1 : defaultUnitsPerMeter;
  
  // Precio base yield: precio del metro dividido entre las unidades por metro.
  const defaultPricePerUnit = pricePerMeter / unitsPerMeter;
  
  // Modelo rotado: se aplica si el ancho de la pieza es mayor que 1 m y menor que el ancho del rollo,
  // excepto si se eligió exactamente 140x100 en Alfombra.
  const useRotatedModel = !isExactAlfombra && pieceWidth > 1 && pieceWidth < rolloWidthM;
  let finalCostPerUnitYield;
  if (useRotatedModel) {
    // Distribuir el costo extra del exceso de largo entre las piezas de la fila.
    const piecesPerRow = Math.floor(rolloWidthM / pieceHeight);
    const baseCostPerUnit = pricePerMeter / piecesPerRow;
    const extraCost = ((pieceWidth - 1) * pricePerMeter) / piecesPerRow;
    finalCostPerUnitYield = baseCostPerUnit + extraCost;
  } else {
    finalCostPerUnitYield = defaultPricePerUnit;
  }
  
  // Multiplicador de venta: 3 para Pro, 2.2 para Clasic y 3.5 para Alfombra.
  const multiplier = mode === "Clasic" ? 2.7 : mode === "Pro" ? 3.2 : 3.8;
  const yieldPrice = finalCostPerUnitYield * multiplier;
  
  // --- Cálculo basado en el área ---
  const costPerM2 = pricePerMeter / rolloWidthM;
  const area = pieceWidth * pieceHeight; // Área en m².
  const areaPrice = area * costPerM2 * multiplier;
  
  // Se toma el menor entre yieldPrice y areaPrice,
  // asegurando que piezas que ocupan menos área tengan un precio base más bajo.
  let baseFinalPrice = Math.min(yieldPrice, areaPrice);
  
  // --- Recargo (surcharge) por aumento de área extra ---
  let baselineArea;
  if (mode === "Pro") {
    baselineArea = 0.26;
  } else {
    baselineArea = 0.36;
  }
  const surchargeFactor = 5000;
  const extraArea = Math.max(0, area - baselineArea);
  const areaSurcharge = surchargeFactor * extraArea;
  
  // Precio final del cliente suma la base y el recargo.
  let clientFinalPrice = baseFinalPrice + areaSurcharge;
  
  // --- Condición adicional ---
  // Si la pieza es menor a 40x40 cm, se aplica un incremento del 30% al precio.
  if (width < 40 && height < 40) {
    clientFinalPrice *= 1.3;
  }
  
  // --- Redondeo ---
  const roundPrice = (price) => {
    const remainder = price % 500;
    if (remainder < 50) {
      return price - remainder;
    } else {
      return price - remainder + 500;
    }
  };
  
  const clientFinalPriceRounded = roundPrice(clientFinalPrice);

  // Actualizamos el precio solo si setPrice es una función para evitar errores.
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
      <p>Área: {area.toFixed(2)} m² (baseline: {baselineArea} m²)</p>
      <p>YieldPrice: ${yieldPrice.toFixed(2)} vs. AreaPrice: ${areaPrice.toFixed(2)}</p>
      <p>Surcharge: ${areaSurcharge.toFixed(2)}</p>
      */}
    </div>
  );
};

export default Calculadora;
