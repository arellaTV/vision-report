const formatHeader = (header) => {
  return header.split(/(?=[A-Z])/).join(' ');
};

const divideIntoCategories = (parameters, context) => {
  const categories = {};
  const tables = [];

  parameters.forEach((parameter) => {
    const currentCategory = parameter.Categories.Category;
    if (!categories[currentCategory]) {
      categories[currentCategory] = [];
    }
    categories[currentCategory].push(parameter);
  });

  for (const key in categories) {
    tables.push({
      category: formatHeader(key),
      parameters: categories[key],
    });
  }

  return context.setState({ tables });
};

export {
  formatHeader,
  divideIntoCategories,
};
