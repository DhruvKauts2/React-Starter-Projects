import UseNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
  const { currentPath } = UseNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
