import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (
  language: string,
  version: string,
  sourceCode?: string
) => {
  const response = await API.post("/execute", {
    language: language,
    version: version,
    files: [
      {
        content: sourceCode,
        // content:
        //   '\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Al");\n',
      },
    ],
  });
  console.log(response.data);
  console.log(sourceCode);

  return response.data;
};
