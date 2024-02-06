// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = function (load, rounder) {
  // For each parameter, its `.value` contains
  // either its value in the type you've declared,
  // or it's `undefined`.  This is a good place to
  // extract the `.value`s and assign default
  // values.
  load = load.value;
  rounder = rounder.value;

  const r = load % rounder;
  if(r !== 0){
    if(r > rounder / 2){
      load = load - r + rounder;
    } else {
      load = load - r;
    }
  }
  return load;
}
