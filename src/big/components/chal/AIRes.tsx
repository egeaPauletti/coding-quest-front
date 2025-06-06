interface ResProps {
  resp: string;
}

const AIRes: React.FC<ResProps> = ({ resp }) => {
  return (
    <>
      <div className="flex flex-col absolute backgroundComponents w-300 max-h-50 text-white -top-90 left-10 border-2 border-green-700 p-8 rounded-xl resAnimation">
        <span>Correção do exercício:</span>
        {resp}
      </div>
    </>
  );
};
export default AIRes;
