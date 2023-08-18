export default {
  ':root': [
    {
      title: '类型',
      type: 'select',
      options: [
        {
          label: 'primary',
          value: 'primary'
        },
        {
          label: 'success',
          value: 'success'
        },
        {
          label: 'info',
          value: 'info'
        },
        {
          label: 'warning',
          value: 'warning'
        },
        {
          label: 'danger',
          value: 'danger'
        }
      ],
      value: {
        get({ data }: EditorResult<any>) {
          return data.type;
        },
        set({ data }: EditorResult<any>, value: string) {
          data.type = value;
        }
      }
    },
    {
      title: '事件',
      items: [
        {
          title: '点击',
          type: '_Event',
          options: () => {
            return {
              outputId: 'click'
            };
          }
        }
      ]
    },
  ]
}