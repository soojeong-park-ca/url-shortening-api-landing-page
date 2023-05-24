import "./NewUrl.css";

export default function NewUrl({ newUrl }) {
  return (
    <div className="newUrl">
      <h2>Here is your newly generated URL by Shortly:</h2>
      <p>{newUrl}</p>
    </div>
  );
}
