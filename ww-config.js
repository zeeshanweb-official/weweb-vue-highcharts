export default {
  editor: {
    label: {
      en: "Highcharts Data Visualization",
    },
  },
  properties: {
    title: {
      label: {
        en: 'title',
        fr: 'Texte par défaut',
      },
      type: 'Text',
      defaultValue: { en: 'title' },
      section: 'settings',
      bindable: true,
      multiLang: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string that defines the title: `"title"`',
      },
      /* wwEditor:end */
    },
    data: {
      label: {
        en: "Grid data",
      },
      type: "Info",
      options: {
        text: { en: "Bind your data" },
      },
      bindable: "repeatable",

      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        validations: [
          {
            type: "array",
          },
          {
            type: "object",
          },
        ],
        tooltip:
          "A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...]`",
      },
      /* wwEditor:end */
    },

  },
};