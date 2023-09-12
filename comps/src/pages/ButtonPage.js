import Button from "../components/Button";
import { GoBell } from "react-icons/go";
function ButtonPage() {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div>
      <div>
        <Button primary rounded onClick class={handleClick} className="mb-5">
          <GoBell />
          Aaa
        </Button>
      </div>
      <div>
        <Button secondary>Bbb</Button>
      </div>
      <div>
        <Button warning>Ccc</Button>
      </div>
      <div>
        <Button success>Ddd</Button>
      </div>
      <div>
        <Button outline danger>
          Eee
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
