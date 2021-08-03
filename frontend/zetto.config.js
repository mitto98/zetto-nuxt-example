export default {
  classes: {
    search: {
      table: 'min-w-full divide-y divide-gray-200',
      tableHead: 'bg-gray-50',
      tableHeadCell:
        'px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider',
      tableBodyCell: 'px-6 py-4 whitespace-nowrap',

      pagination: {
        nav: 'block',
        ul: 'flex pl-0 rounded list-none flex-wrap',
        li: '',
        page: '',
        active: '',
        first: '',
        last: '',
        button:
          'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-800 text-white bg-gray-800',
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
