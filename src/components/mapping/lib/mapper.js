import flatten from 'flat';

const createObject = (name, paths, src) => {
  let value = '';
  if (paths && Array.isArray(paths)) {
    paths.forEach((path) => {
      let _value = flatten(src)[path];
      if (_value) {
        value = _value;
      }
    })
  }
  return {
    [name]: value
  }
}

const _mapper = (domain, src) => {
  const _domain = Object.assign(domain, {});

  Object.keys(domain).forEach((key) => {
    const _paths = domain[key];
    if (!Array.isArray(_paths)) {
      return Object.assign(_domain, {
        [key]: _mapper({ ..._paths }, src)
      });
    }
    Object.assign(_domain, createObject(key, _paths, src));
  })

  return _domain;
}

const mapper = (domains, src) => {
  return domains.map((domain) => {
    return _mapper(domain, src)
  })
}

export default mapper