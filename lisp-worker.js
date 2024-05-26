addEventListener('message', e => {
  postMessage({"type": "eval", "out": e.data.out})
});

