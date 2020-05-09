import PrismicComponents from './cms';

export default function Render({ data }) {
  const { slice_type } = data;
  const Component = PrismicComponents[slice_type];
  if (Component) return <Component {...data} />;
  return <div className="missing-element">{`Missing component: ${slice_type}`}</div>;
}
