
function Retrato() {
  // Placeholder image URL for the pruner.
  // In a real application, this would be a prop or an imported asset.
  const prunerImageUrl = "./images/podador.png";

  return (
    <>
 
      <div className="retrato-container flex flex-col items-center justify-center p-4 rounded-lg shadow-xl">
        <img
          src={prunerImageUrl}
          alt="Podador"
          className="rounded-lg shadow-md max-w-full h-auto"
        />
      </div>
    </>
  );
};
export default Retrato;