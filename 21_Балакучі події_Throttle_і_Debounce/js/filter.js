const technologigs = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const input = document.querySelector("#filter");
const list = document.querySelector("#tech-list");

input.addEventListener("input", _.debounce(onFilterChange, 300));

const listItemsMarkUp = createListItemsTechMarkUp(technologigs);
populateList(listItemsMarkUp);

function createListItemsTechMarkUp(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilterChange(e) {
  const inputValue = e.target.value;
  const filteredTech = technologigs.filter((tech) =>
    tech.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  const listItemsMarkUpFiltred = createListItemsTechMarkUp(filteredTech);
  populateList(listItemsMarkUpFiltred);
}

function populateList(markup) {
  list.innerHTML = markup;
}
