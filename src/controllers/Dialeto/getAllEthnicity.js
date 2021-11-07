/* istanbul ignore file */

import Dialeto from "../../models/Dialeto";

export async function getAllEthnicity(request, response) {
  const { id_lingua } = request.params;
  const etniasEncontradas = await Dialeto.searchAllEthnicity(id_lingua);
  response.send(etniasEncontradas);
}
