type RequestState =
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function getStatusLabel(state: RequestState) {
  switch (state.status) {
    case "loading":
      return "Loading";
    case "success":
      return state.message;
    default:
      return "Unknown";
  }
}
