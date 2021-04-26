const setThemeClassOnBody = (theme: string): void => {
  const bodyClassList = document.querySelector('body')?.classList as DOMTokenList;

  if (bodyClassList.contains('theme-dark')) {
    bodyClassList.remove('theme-dark');
    bodyClassList.add(`theme-${theme}`);
  }

  if (bodyClassList.contains('theme-light')) {
    bodyClassList.remove('theme-light');
    bodyClassList.add(`theme-${theme}`);
  }
};

export default setThemeClassOnBody;
