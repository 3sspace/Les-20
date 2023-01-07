let metric = prompt(
    'Choose the metric: "m" or "cm"'
    );
let km = prompt(
    "Enter the distance in km"
    );
let m, cm;
function KmToM(km) {
  m = km * 1000;
  return m;
}
function KmToCm(km) {
  cm = km * 100000;
  return cm;
}
function getMetric(metric, km, m, cm) {
  switch (metric) {
    case 'm':
      return m(km);
      break;
    case 'cm':
      return cm(km);
}
}
alert(`${getMetric(metric, km, KmToM, KmToCm)} ${metric}`);
getMetric(metric, km, KmToM, KmToCm);


