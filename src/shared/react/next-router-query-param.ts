const nextRouterQueryParam = function nextRouterQueryParam(
  paramValue: string | string[] | undefined,
  defaultValue?: string,
) {
  if (paramValue === undefined) {
    return defaultValue;
  }

  if (Array.isArray(paramValue)) {
    return paramValue[0];
  }

  return paramValue;
};

export { nextRouterQueryParam, nextRouterQueryParam as default };
