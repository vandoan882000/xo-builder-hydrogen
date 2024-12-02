export const article_default = {
  label: 'Article page',
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
      children: ['id_m46ow9sy69qh'],
    },
    id_m46ow9sz74ul: {
      type: 'element',
      id: 'id_m46ow9sz74ul',
      elementId: 'article-image',
      label: 'Article image',
      parent: 'id_m46ow9sy69qh',
      settings: {
        static: {},
        $article: {},
        mediaRatio: 'square',
        mediaHeight: {
          desktop: {
            value: 65,
            unit: '%',
          },
        },
        mediaObjectFit: 'cover',
        $enableLink: 'no',
        styles: {},
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
        attributes: {
          id: '',
          class: '',
        },
      },
      previewExcludeActions: [],
    },
    id_m46ow9sz1005k: {
      type: 'element',
      id: 'id_m46ow9sz1005k',
      elementId: 'article-author',
      label: 'Article author',
      parent: 'id_m46ow9sz9v4v',
      settings: {
        static: {},
        $article: {},
        styles: {},
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
        attributes: {
          id: '',
          class: '',
        },
        $linkEnabled: 'div',
      },
      previewExcludeActions: [],
    },
    id_m46ow9sz11b14: {
      type: 'element',
      id: 'id_m46ow9sz11b14',
      elementId: 'article-date',
      label: 'Article date',
      parent: 'id_m46ow9sz9v4v',
      settings: {
        static: {},
        $article: {},
        styles: {},
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
        attributes: {
          id: '',
          class: '',
        },
        $linkEnabled: 'div',
      },
      previewExcludeActions: [],
    },
    id_m46ow9sz9v4v: {
      type: 'wrapper',
      id: 'id_m46ow9sz9v4v',
      elementId: 'wrapper',
      label: 'Block header',
      children: ['id_m46ow9sz1005k', 'id_m46ow9sz11b14'],
      parent: 'id_m46ow9sz8scw',
      settings: {
        static: {
          class: 'article__block-child-header',
        },
        layoutStyle: 'column',
        layoutWrap: {
          desktop: 'wrap',
        },
        verticalSpacing: {
          desktop: {
            value: 15,
            unit: 'px',
          },
        },
        horizontalSpacing: {
          desktop: {
            value: 15,
            unit: 'px',
          },
        },
        wrapperWidth: 'fullWidth',
        maxWidth: {
          desktop: {
            value: 100,
            unit: '%',
          },
        },
        horizontalPosition: {
          desktop: 'left',
        },
        heightSelector: 'auto',
        minHeight: {
          desktop: {
            value: 300,
            unit: 'px',
          },
        },
        verticalAlign: {
          desktop: 'start',
        },
        horizontalAlign: {
          desktop: 'stretch',
        },
        positionType: 'relative',
        wrapperIndex: {
          value: 1,
        },
        positionAbsolute: {
          desktop: 'center',
        },
        styles: {},
        css_code: '',
        actionEnabled: false,
        actionWrapper: {
          actionType: 'no',
        },
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
        attributes: {
          id: '',
          class: '',
        },
      },
      previewExcludeActions: [],
    },
    id_m46ow9sz12mle: {
      type: 'element',
      id: 'id_m46ow9sz12mle',
      elementId: 'article-title',
      label: 'Article title',
      parent: 'id_m46ow9sz8scw',
      settings: {
        static: {},
        $article: {},
        htmlTag: 'h3',
        linkEnabled: 'no',
        styles: {},
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
        attributes: {
          id: '',
          class: '',
        },
        $linkEnabled: 'div',
      },
      previewExcludeActions: [],
    },
    id_m46ow9sz14j3h: {
      type: 'element',
      id: 'id_m46ow9sz14j3h',
      elementId: 'article-content',
      label: 'Article content',
      parent: 'id_m46ow9sz13n62',
      settings: {
        static: {},
        $article: {},
        styles: {},
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
        attributes: {
          id: '',
          class: '',
        },
      },
      previewExcludeActions: [],
    },
    id_m46ow9sz13n62: {
      type: 'wrapper',
      id: 'id_m46ow9sz13n62',
      elementId: 'wrapper',
      label: 'Block content',
      children: ['id_m46ow9sz14j3h'],
      parent: 'id_m46ow9sz8scw',
      settings: {
        static: {
          class: 'article__block-child-content',
        },
        layoutStyle: 'column',
        layoutWrap: {
          desktop: 'wrap',
        },
        verticalSpacing: {
          desktop: {
            value: 15,
            unit: 'px',
          },
        },
        horizontalSpacing: {
          desktop: {
            value: 15,
            unit: 'px',
          },
        },
        wrapperWidth: 'fullWidth',
        maxWidth: {
          desktop: {
            value: 100,
            unit: '%',
          },
        },
        horizontalPosition: {
          desktop: 'left',
        },
        heightSelector: 'auto',
        minHeight: {
          desktop: {
            value: 300,
            unit: 'px',
          },
        },
        verticalAlign: {
          desktop: 'start',
        },
        horizontalAlign: {
          desktop: 'stretch',
        },
        positionType: 'relative',
        wrapperIndex: {
          value: 1,
        },
        positionAbsolute: {
          desktop: 'center',
        },
        styles: {},
        css_code: '',
        actionEnabled: false,
        actionWrapper: {
          actionType: 'no',
        },
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
        attributes: {
          id: '',
          class: '',
        },
      },
      previewExcludeActions: [],
    },
    id_m46ow9sz8scw: {
      type: 'wrapper',
      id: 'id_m46ow9sz8scw',
      elementId: 'wrapper',
      label: 'Wrapper',
      children: ['id_m46ow9sz9v4v', 'id_m46ow9sz12mle', 'id_m46ow9sz13n62'],
      parent: 'id_m46ow9sy69qh',
      settings: {
        static: {
          class: 'xb-featured-article__content',
        },
        layoutStyle: 'column',
        layoutWrap: {
          desktop: 'wrap',
        },
        verticalSpacing: {
          desktop: {
            value: 15,
            unit: 'px',
          },
        },
        horizontalSpacing: {
          desktop: {
            value: 15,
            unit: 'px',
          },
        },
        wrapperWidth: 'fullWidth',
        maxWidth: {
          desktop: {
            value: 100,
            unit: '%',
          },
        },
        horizontalPosition: {
          desktop: 'left',
        },
        heightSelector: 'auto',
        minHeight: {
          desktop: {
            value: 300,
            unit: 'px',
          },
        },
        verticalAlign: {
          desktop: 'start',
        },
        horizontalAlign: {
          desktop: 'stretch',
        },
        positionType: 'relative',
        wrapperIndex: {
          value: 1,
        },
        positionAbsolute: {
          desktop: 'center',
        },
        styles: {},
        css_code: '',
        actionEnabled: false,
        actionWrapper: {
          actionType: 'no',
        },
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
        attributes: {
          id: '',
          class: '',
        },
      },
      previewExcludeActions: [],
    },
    id_m46ow9sy69qh: {
      type: 'wrapper',
      id: 'id_m46ow9sy69qh',
      elementId: 'featured-article',
      label: 'Feature article',
      parent: 'id_m46ow64n45on',
      settings: {
        static: {},
        $article: {},
        content_type: 'full',
        max_line: {
          value: 5,
        },
        styles: {},
      },
      children: ['id_m46ow9sz74ul', 'id_m46ow9sz8scw'],
      isGroupParent: true,
      group: 'featured-article',
      previewExcludeActions: [],
    },
  },
  order: ['id_m46ow64n20fm'],
  pageType: 'article',
};
