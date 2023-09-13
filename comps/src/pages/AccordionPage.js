import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "asfdds",
      label: "Can I use react on a project though",
      content:
        "You can use react on any project you want. You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.",
    },
    {
      id: "bsfvasdf",
      label: "Can I use javascript on a project though",
      content:
        "You can use javascript on any project you want. You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want",
    },
    {
      id: "vjasidfm",
      label: "Can I use CSS on a project though",
      content:
        "You can use CSS on any project you want. You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
