export default interface Movie {
   _id: string,
   title: string,
   rating: number,
   description: string,
   director: string,
   stars: string[],
   poster: string,
   createdAt: "date",
   updatedAt: "date"
}