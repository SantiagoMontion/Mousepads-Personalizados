import React from "react"; 

const rolloData = { 
  Pro: { width: 125, pricePerMeter: 36145, multiplier: 3.2, baselineArea: 0.26 }, 
  Clasic: { width: 140, pricePerMeter: 23820, multiplier: 2.7, baselineArea: 0.36 }, 
  Alfombra: { width: 154, pricePerMeter: 25000, multiplier: 3.2, baselineArea: 0.36 }, 
}; 

const Calculadora = ({ width, height, mode, setPrice }) => { 
  if (!rolloData[mode]) { 
    return <p>Modo no válido</p>; 
  } 

  const { width: rolloWidth, pricePerMeter, multiplier, baselineArea } = rolloData[mode]; 
  const rolloWidthM = rolloWidth / 100; 

  const normalizedWidthCm = width; 
  const normalizedHeightCm = height; 

  const pieceWidthNormalized = normalizedWidthCm / 100; 
  const pieceHeightNormalized = normalizedHeightCm / 100; 

  const unitsHorizontal = Math.floor(rolloWidthM / pieceWidthNormalized) * Math.floor(1 / pieceHeightNormalized); 
  const unitsRotated = Math.floor(rolloWidthM / pieceHeightNormalized) * Math.max(Math.floor(1 / pieceWidthNormalized), 1); 
  const unitsPerMeter = Math.max(unitsHorizontal, unitsRotated, 1); 

  const defaultPricePerUnit = pricePerMeter / unitsPerMeter; 

  const isExactAlfombra = mode === "Alfombra" && pieceWidthNormalized === 1.4 && pieceHeightNormalized === 1; 
  const useRotatedModel = !isExactAlfombra && pieceWidthNormalized > 1 && pieceWidthNormalized < rolloWidthM; 

  let finalCostPerUnit; 
  if (useRotatedModel) { 
    const piecesPerRow = Math.floor(rolloWidthM / pieceHeightNormalized); 
    const baseCostPerUnit = pricePerMeter / piecesPerRow; 
    const extraCost = ((pieceWidthNormalized - 1) * pricePerMeter) / piecesPerRow; 
    finalCostPerUnit = baseCostPerUnit + extraCost; 
  } else { 
    finalCostPerUnit = defaultPricePerUnit; 
  } 

  const yieldPrice = finalCostPerUnit * multiplier; 

  const costPerM2 = pricePerMeter / rolloWidthM; 
  const area = pieceWidthNormalized * pieceHeightNormalized; 
  const areaPrice = area * costPerM2 * multiplier; 

  let baseFinalPrice = Math.min(yieldPrice, areaPrice); 

  const surchargeFactor = 5000; 
  const extraArea = Math.max(0, area - baselineArea); 
  const areaSurcharge = surchargeFactor * extraArea; 

  const extraCharge = (width > normalizedWidthCm ? 500 : 0) + (height > normalizedHeightCm ? 500 : 0); 

  if (width < 40 && height < 40) { 
    baseFinalPrice *= 1.3; 
  } 

  // ✅ Redondear base antes del aumento del 25% 
  const roundBasePrice = (price) => Math.ceil(price / 500) * 500; 
  const basePriceRounded = roundBasePrice(baseFinalPrice + areaSurcharge + extraCharge); 

  // ✅ Aplicar 25% al precio redondeado 
  let clientFinalPrice = basePriceRounded * 1.25; 

  // ✅ Redondeo final (puede ser a entero o múltiplo de 50/100 si preferís) 
  const roundPrice = (price) => Math.round(price); // o Math.ceil(price / 50) * 50; 
  const clientFinalPriceRounded = roundPrice(clientFinalPrice); 

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
      <p className="minitext"> 
        20% OFF con transferencia:{" "}{" "} 
        {(clientFinalPriceRounded * 0.8).toLocaleString("es-AR", { 
          maximumFractionDigits: 0, 
          minimumFractionDigits: 0, 
        })} 
      </p> 
    </div> 
  ); 
}; 

export default Calculadora;
