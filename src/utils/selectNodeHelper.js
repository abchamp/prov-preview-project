export const MM_NODE_COLORS = {
  PRIMARY_ONE_NUM: "#fbebe9",
  PRIMARY_TWO_NUM: "#fcc1b1",
  PRIMARY_THREE_NUM: "#fbe6d9",
  PRIMARY_FOUR_NUM: "#f89244",
  SECONDARY_ONE_NUM: "",
  SECONDARY_TWO_NUM: "#ff622e",
  ACCENT_ONE_NUM: "#acc0d2",
  ACCENT_TWO_NUM: "#225988",
  BASE_ONE_NUM: "#eeeef2",
  BASE_TWO_NUM: "#728ca6",
};

export function calculateFocusNodeRingClassHelper(progressNumber) {
  if (progressNumber >= 100) {
    return `ring-2 ring-offset-2 ring-mm-accent-two`;
  } else if (progressNumber >= 50) {
    return `ring-2 ring-offset-2 ring-mm-primary-four`;
  } else if (progressNumber > 0) {
    return `ring-2 ring-offset-2 ring-mm-secondary-two`;
  } else {
    return `ring-2 ring-offset-2 ring-mm-base-two`;
  }
}

export function calculateProgressNodeHelper(progressNumber) {
  let s = [];
  if (progressNumber >= 100) {
    s = ["background-color:" + MM_NODE_COLORS.ACCENT_TWO_NUM];
  } else if (progressNumber >= 50) {
    s = ["background-color:" + MM_NODE_COLORS.PRIMARY_FOUR_NUM];
  } else if (progressNumber > 0) {
    s = ["background-color:" + MM_NODE_COLORS.SECONDARY_TWO_NUM];
  } else {
    s = ["background-color:" + MM_NODE_COLORS.BASE_TWO_NUM];
  }

  return s.join(";");
}

const FOCUS_EDGE_STROKE_WIDTH = 3;
const FOCUS_EDGE_STROKE_DASH = 5;
export const FOCUS_EDGE_STYLE = {
  FINISH: {
    stroke: MM_NODE_COLORS.ACCENT_TWO_NUM,
    strokeWidth: FOCUS_EDGE_STROKE_WIDTH,
    strokeDasharray: FOCUS_EDGE_STROKE_DASH,
  },
  MORE_THAN_HALF: {
    stroke: MM_NODE_COLORS.PRIMARY_FOUR_NUM,
    strokeWidth: FOCUS_EDGE_STROKE_WIDTH,
    strokeDasharray: FOCUS_EDGE_STROKE_DASH,
  },
  STARTING: {
    stroke: MM_NODE_COLORS.SECONDARY_TWO_NUM,
    strokeWidth: FOCUS_EDGE_STROKE_WIDTH,
    strokeDasharray: FOCUS_EDGE_STROKE_DASH,
  },
  NOT_START: {
    stroke: MM_NODE_COLORS.BASE_TWO_NUM,
    strokeWidth: FOCUS_EDGE_STROKE_WIDTH,
    strokeDasharray: FOCUS_EDGE_STROKE_DASH,
  },
  VACANT: {
    stroke: "#f97316",
    strokeWidth: FOCUS_EDGE_STROKE_WIDTH - 1,
    strokeDasharray: FOCUS_EDGE_STROKE_DASH,
  },
};

export function getDefaultProgressAtEdgeHelper(progressNumber) {
  let o = { style: {}, animated: false };
  if (progressNumber === "vacant") {
    o.style = FOCUS_EDGE_STYLE.VACANT;
    return o;
  }

  let pn = Number(progressNumber);
  //
  if (pn >= 100) {
    o.style = {
      stroke: FOCUS_EDGE_STYLE.FINISH.stroke,
      strokeWidth: FOCUS_EDGE_STROKE_WIDTH - 1,
      strokeDasharray: FOCUS_EDGE_STROKE_DASH,
    };
  } else if (pn >= 50) {
    o.style = {
      stroke: FOCUS_EDGE_STYLE.MORE_THAN_HALF.stroke,
      strokeWidth: FOCUS_EDGE_STROKE_WIDTH - 1,
      strokeDasharray: FOCUS_EDGE_STROKE_DASH,
    }; // custom
  } else if (pn > 0) {
    o.style = {
      stroke: FOCUS_EDGE_STYLE.STARTING.stroke,
      strokeDasharray: FOCUS_EDGE_STROKE_DASH,
      strokeWidth: FOCUS_EDGE_STROKE_WIDTH - 1,
    }; // custom
  } else {
    o.style = {
      stroke: FOCUS_EDGE_STYLE.NOT_START.stroke,
      strokeDasharray: FOCUS_EDGE_STROKE_DASH,
      strokeWidth: FOCUS_EDGE_STROKE_WIDTH - 1,
    };
  }

  return o;
}

export function preprocessRawEdgeDataHelper(_edges) {
  try {
    let resultData = [];
    let defaultStyle = {};
    for (let i = 0; i < _edges.length; i++) {
      // MARK: progress SET
      const stAndAnimate = getDefaultProgressAtEdgeHelper(
        _edges[i]["data"]["progress"]
      );

      resultData.push({
        ..._edges[i],
        data: {},
        ...stAndAnimate,
      });
    }
    return { edges: resultData, dfStyle: defaultStyle };
  } catch (error) {
    console.error(error);
  }

  return {};
}
