import { codeDiffLinesMerge } from '../state-generator';

it("diff", () => {
  var prevCode = `{
    isTelefonu: formItems.string({
      name: "isTelefonu",
      label: "İş Telefonu",
      required: true
    })
  }`;

  var nextCode = `{
    isTelefonu: formItems.string({
      name: "isTelefonu",
      label: ""
    })
    cepTelefonu: formItems.string({
      name: "cepTelefonu",
      label: ""
    })
  }`;

  const generated = codeDiffLinesMerge(prevCode, nextCode);
  expect(generated).toBe(`{
    isTelefonu: formItems.string({
      name: "isTelefonu",
      label: "İş Telefonu",
      required: true
    })
    cepTelefonu: formItems.string({
      name: "cepTelefonu",
      label: ""
    })
  }`);
});
