import styled from "@emotion/styled";

interface RenderProps {
  element: HTMLCanvasElement;
  minutely: any;
}

const renderPrecipitationGraph = ({ element, minutely }: RenderProps) => {
  if (!element) return;
  const width = 400;
  const height = Math.round(width * 0.3);
  element.width = width;
  element.height = height;
  const context = element.getContext("2d");

  const sixth = Math.round(width / 6);
  context.save();
  context.strokeStyle = "gray";
  context.lineWidth = 2;
  for (let i = 1; i < 6; i++) {
    context.moveTo(i * sixth, height);
    context.lineTo(i * sixth, height - 10);
    context.stroke();
  }
  context.restore();

  const third = Math.round(height / 3);
  context.save();
  context.strokeStyle = "gray";
  context.setLineDash([5, 15]);
  context.lineWidth = 1;
  for (let i = 1; i < 3; i++) {
    context.moveTo(0, i * third);
    context.lineTo(width, i * third);
    context.stroke();
  }
  context.restore();

  const data = minutely.data;
  const stepSize = Math.round(width / data.length);
  context.save();
  context.strokeStyle = "white";
  context.fillStyle = "white";
  context.globalCompositeOperation = "xor";
  context.beginPath();
  context.moveTo(0, height);
  const threshold = 0.1;
  let intensity;

  // figure out how we're going to scale our graph
  let maxIntensity = 0;
  for (let i = 0; i < data.length; i++) {
    maxIntensity = Math.max(maxIntensity, data[i].precipIntensity);
  }
  // if current intensity is above our normal scale top, make that the top
  if (maxIntensity < 0.2) {
    maxIntensity = 0.2;
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].precipProbability < threshold) {
      intensity = 0;
    } else {
      intensity = height * (data[i].precipIntensity / maxIntensity);
    }
    context.lineTo(i * stepSize, height - intensity);
  }
  context.lineTo(width, height);
  context.closePath();
  context.fill();
  context.restore();
};

const Canvas = styled("canvas")`
  border: 1px solid #aaa;
  margin-top: 1ex;
`;

const PrecipGraph = ({ minutely }) => (
  <Canvas
    ref={(element) => {
      renderPrecipitationGraph({ element, minutely });
    }}
  />
);

export default PrecipGraph;
