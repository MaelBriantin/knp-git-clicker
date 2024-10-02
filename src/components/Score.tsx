// This component must display the number of lines produced
type ScoreProps = {
  createdLines: number;
};

export const Score: React.FC<ScoreProps> = ({ createdLines }) => {
  return (
    <div className="score">
      {Math.floor(createdLines)} lines
    </div>
  )
};
