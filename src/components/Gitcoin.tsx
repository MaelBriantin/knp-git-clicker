type GitcoinProps = {
  setCreatedLine: React.Dispatch<React.SetStateAction<number>>;
};

export const Gitcoin: React.FC<GitcoinProps> = ({ setCreatedLine }) => {
  return (
    <div className="gitcoin" onClick={() => setCreatedLine((line) => line + 1)}>
      <img src="/gitcoin.svg" alt="Gitcoin" />
    </div>
  )
}
