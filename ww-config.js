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
  },
};