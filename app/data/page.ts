export const page_default = {
  label: 'Page',
  category: 'Others',
  entities: {
    id_m46ow64n20fm: {
      id: 'id_m46ow64n20fm',
      elementId: 'section',
      type: 'wrapper',
      label: 'Section 1',
      children: ['id_m46ow64n3ljh'],
      spaceIdSync: 'styles',
      parent: '',
      settings: {
        containerWidth: 'global',
        maxWidth: {
          desktop: {
            value: 1200,
            unit: 'px',
          },
          tablet: {
            value: 768,
            unit: 'px',
          },
          mobile: {
            value: 576,
            unit: 'px',
          },
        },
        containerGapSelector: 'global',
        containerGap: {
          desktop: {
            value: 15,
            unit: 'px',
          },
          tablet: {
            value: 15,
            unit: 'px',
          },
          mobile: {
            value: 15,
            unit: 'px',
          },
        },
        heightSelector: 'auto',
        minHeight: {
          desktop: {
            value: 100,
            unit: 'vh',
          },
        },
        verticalAlign: {
          desktop: 'start',
        },
        horizontalAlign: 'stretch',
        styles: {
          normal: {
            spacing: {
              padding: {
                desktop: {
                  top: {
                    value: 50,
                    unit: 'px',
                  },
                  bottom: {
                    value: 50,
                    unit: 'px',
                  },
                },
                tablet: {
                  top: {
                    value: 40,
                    unit: 'px',
                  },
                  bottom: {
                    value: 40,
                    unit: 'px',
                  },
                },
                mobile: {
                  top: {
                    value: 30,
                    unit: 'px',
                  },
                  bottom: {
                    value: 30,
                    unit: 'px',
                  },
                },
              },
            },
          },
        },
        css_code: '',
        visibilityEnabled: false,
        visibility: {},
        animationEnabled: false,
        animationType: 'infinite',
        animateDuration: {
          value: 800,
          unit: 'ms',
        },
        animateEffect: 'none',
        animateInfiniteEffect: 'none',
        animateStrength: {
          value: 0,
        },
        attrsEnabled: false,
        attributes: {},
      },
    },
    id_m46ow64n3ljh: {
      type: 'wrapper',
      id: 'id_m46ow64n3ljh',
      elementId: 'grid',
      label: 'Grid',
      children: ['id_m46ow64n45on'],
      parent: 'id_m46ow64n20fm',
      settings: {
        grid: {
          desktop: {
            value: 1,
          },
          tablet: {
            value: 1,
          },
          mobile: {
            value: 1,
          },
        },
        gap: {
          desktop: {
            value: 30,
            unit: 'px',
          },
          tablet: {
            value: 20,
            unit: 'px',
          },
          mobile: {
            value: 15,
            unit: 'px',
          },
        },
        verticalAlign: 'stretch',
        horizontalAlign: 'stretch',
        styles: {},
        visibilityEnabled: false,
        visibility: {},
        animationEnabled: false,
        animationType: 'infinite',
        animateDuration: {
          value: 800,
          unit: 'ms',
        },
        animateEffect: 'none',
        animateInfiniteEffect: 'none',
        animateStrength: {
          value: 0,
        },
        attrsEnabled: false,
        attributes: {},
      },
    },
    id_m46ow64n45on: {
      type: 'wrapper',
      id: 'id_m46ow64n45on',
      elementId: 'col',
      label: 'Column',
      parent: 'id_m46ow64n3ljh',
      settings: {
        static: {
          class: '',
        },
        gridArea: {
          column: {
            desktop: {
              value: 1,
            },
          },
          row: {
            desktop: {
              value: 1,
            },
          },
        },
        columnOrder: {
          desktop: {
            value: 0,
          },
        },
        styles: {},
        column: {
          desktop: {
            value: 1,
          },
        },
        row: {
          desktop: {
            value: 1,
          },
        },
      },
      children: ['id_m46ow9sz1005k', 'id_m46ow9sz11b14'],
    },
    id_m46ow9sz1005k: {
      type: 'element',
      id: 'id_m46ow9sz1005k',
      elementId: 'page-title',
      label: 'Page title',
      parent: 'id_m46ow64n45on',
      settings: {
        htmlTag: 'h1',
        styles: {
          normal: {
            typography: {
              'font-size': {
                desktop: {
                  value: 35,
                  unit: 'px',
                },
                tablet: {
                  value: 29,
                  unit: 'px',
                },
                mobile: {
                  value: 25,
                  unit: 'px',
                },
              },
            },
            spacing: {
              margin: {
                desktop: {
                  bottom: {
                    value: 20,
                    unit: 'px',
                  },
                },
                mobile: {
                  bottom: {
                    value: 15,
                    unit: 'px',
                  },
                },
              },
            },
          },
        },
      },
      previewExcludeActions: [],
    },
    id_m46ow9sz11b14: {
      type: 'element',
      id: 'id_m46ow9sz11b14',
      elementId: 'page-content',
      label: 'Page content',
      parent: 'id_m46ow64n45on',
      settings: {
        styles: {
          normal: {
            typography: {
              'font-size': {
                desktop: {
                  value: 18,
                  unit: 'px',
                },
                tablet: {
                  value: 18,
                  unit: 'px',
                },
                mobile: {
                  value: 16,
                  unit: 'px',
                },
              },
            },
          },
        },
      },
      previewExcludeActions: [],
    },
  },
  order: ['id_m46ow64n20fm'],
  pageType: 'page',
  isDefault: true,
};
