const node = {
  data: "d",
  right: {
    data: "o",
    right: undefined,
    left: undefined
  },
  left: {
    data: "r",
    right: {
      data: "",
      right: undefined
    },
    left: undefined
  }
};

function getSumOfTree(node) {
  let sum = node.data;

  if (!node.right && !node.left) {
    return sum;
  }

  if (node.right) {
    sum += getSumOfTree(node.right);
  }

  if (node.left) {
    sum += getSumOfTree(node.left);
  }

  return sum;
}

// console.log("result", getSumOfTree(node2));

const node2 = {
  data: 1,
  right: {
    data: 7,
    right: undefined,
    left: undefined
  },
  left: {
    data: 1,
    right: {
      data: 3,
      right: undefined
    },
    left: undefined
  }
};

// return the maximum value in the tree
function getMaxValueInNodeHelper(node, maxValue) {
  let tempMaxValue = Math.max(maxValue, node.data);

  if (!node.right && !node.left) {
    return Math.max(node.data, maxValue);
  }

  if (node.right) {
    tempMaxValue = getMaxValueInNodeHelper(node.right, tempMaxValue);
  }

  if (node.left) {
    tempMaxValue = getMaxValueInNodeHelper(node.left, tempMaxValue);
  }

  return tempMaxValue;
}

function getMaxValueInNode(node) {
  return getMaxValueInNodeHelper(node, node.data);
}

console.log("result", getMaxValueInNode(node2));
