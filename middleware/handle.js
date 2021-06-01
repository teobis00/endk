export default function({ store, redirect, route }) {
  console.log("middleware route", route);
  // If the user is not authenticated
  //if (!store.state.authenticated) {
  //  return redirect("/login");
  // }
  /*
  store.subscribe((mutation, state) => {
    console.log("mutation", mutation.type);
  });
  */
  store.commit("app/setSection", route.meta[0]);
}
