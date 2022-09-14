export default {
  container: {
    backgroundColor: '#FFF',
    padding: '5px'
  },
  table: {
    borderCollapse: 'collapse'
  },
  cellOuter: {
    cursor: 'pointer',
  },
  cell: {
    default: {
      border: '1px solid #CCC'
    },
    active: {
      backgroundColor: '#E6F2FF'
    },
    mouseOver: {
      backgroundColor: '#E6F2FF'
    },
    selected: {
      border: '1px solid #2F9AFF'
    }
  },
  dimensions: {
    background: '#F0F0F0',
    color: '#444',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    wordBreak: 'keep-all',
    padding: '5px',
    zIndex: 1000
  }
};
