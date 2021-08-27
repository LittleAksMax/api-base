
const getTimeStamp = (): string => {
  return new Date().toISOString();
}

const info = (namespace: string, msg: string, object?: any) => {
  console.log(`[${getTimeStamp()}] [?] [${namespace}] ${msg}`, object ? object : "");
};

const debug = (namespace: string, msg: string, object?: any) => {
  console.log(`[${getTimeStamp()}] [-] [${namespace}] ${msg}`, object ? object : "");
};

const warn = (namespace: string, msg: string, object?: any) => {
  console.log(`[${getTimeStamp()}] [#] [${namespace}] ${msg}`, object ? object : "");
};

const error = (namespace: string, msg: string, object?: any) => {
  console.log(`[${getTimeStamp()}] [!] [${namespace}] ${msg}`, object ? object : "");
};

export default {
  info, debug, warn, error
}
