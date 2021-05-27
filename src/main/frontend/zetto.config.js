export default {
  classes: {
    search: {
      table: 'min-w-full divide-y divide-gray-200',
      tableHead: 'bg-gray-50',
      tableHeadCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider',
      tableBodyCell: 'px-6 py-4 whitespace-nowrap',

      pagination: {
        ul: '',
        li: '',
        page: '',
        active: '',
        first: '',
        last: '',
        button: '',
      },
    },
  },
  formulate: {
    classes: {
      outer: 'mb-4',
      input(context) {
        switch (context.classification) {
          case 'button':
          case 'submit':
            return 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600';
          default:
            return 'border border-gray-400 rounded px-3 py-2 leading-none focus:border-blue-500 outline-none border-box w-full mb-1';
        }
      },
      label: 'font-medium text-sm',
      help: 'text-xs mb-1 text-gray-600',
      error: 'text-red-700 text-xs mb-1',
    },
  },
};
