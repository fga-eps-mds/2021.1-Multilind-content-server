/* istanbul ignore file */

import Lingua from "../../models/Lingua";

export async function getAll(request, response) {
  const linguasEncontradas = await Lingua.searchAll();

  response.json(linguasEncontradas);
}
