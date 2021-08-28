
const getTimeStamp = (): string => {
  return new Date().toISOString();
}

const info = (namespace: string, msg: string, object?: any) => {
  console.log(`[${getTimeStamp()}] [?] [${namespace}] ${msg}`, object ? object : "");
};

const debug = (namespace: string, msg: string, object?: any) => {
  console.debug(`[${getTimeStamp()}] [-] [${namespace}] ${msg}`, object ? object : "");
};

const warn = (namespace: string, msg: string, object?: any) => {
  console.warn(`[${getTimeStamp()}] [#] [${namespace}] ${msg}`, object ? object : "");
};

const error = (namespace: string, msg: string, object?: any) => {
  console.error(`[${getTimeStamp()}] [!] [${namespace}] ${msg}`, object ? object : "");
};

export default {
  info, debug, warn, error
}
