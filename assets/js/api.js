/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = " https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "edd25dbc";
const /** {String} */ APP_KEY = "92c5dd09b944a63fd0e3ccc45650176f";
const /** {String} */ TYPE = "public";

/**
 *
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
  const query = queries
    ?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${
    query ? "&" + query : ""
  }`;

  console.log;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
};
