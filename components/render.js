import PrismicComponents from './cms';

export default function Render({ data }) {
  const { slice_type, type } = data;
  const componentType = slice_type || type;
  const Component = PrismicComponents[componentType];
  if (Component) return <Component {...data} />;
  return <div className="missing-element">{`Missing component: ${componentType}`}</div>;
}
