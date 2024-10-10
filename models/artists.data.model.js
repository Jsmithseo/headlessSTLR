// import { collection, doc, writeBatch } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import fs from "fs/promises";

// // Your web app's Firebase configuration

// // Initialize Firebase
// const app = initializeApp(config);

// const db = getFirestore(app);

// const artistsData = async () => {
//   const data = await fs.readFile("artists-download.json", "utf-8");
//   const artists = JSON.parse(data);
//   return artists;
// };

// async function uploadArtistsToFirestore() {
//   try {
//     const artists = await artistsData(); // Await artists data

//     // Firestore has a limit of 500 operations per batch
//     const batchSize = 500;
//     let batch = writeBatch(db);
//     let operationCount = 0;

//     for (const artist of artists.artists) {
//       const artistRef = doc(collection(db, "artists"), artist.id.toString());
//       batch.set(artistRef, {
//         thumbnail: artist.thumbnail,
//         page: artist.page,
//         title: artist.title,
//         location: artist.location,
//         genres: artist.genres,
//         regions: artist.regions,
//         venueTypes: artist["venue-types"],
//         venuePartners: artist["venue-partners"],
//         occupations: artist.occupations,
//         status: artist.status,
//         contact: artist.contact,
//         commission: artist.commission,
//       });

//       operationCount++;
//       if (operationCount === batchSize) {
//         await batch.commit(); // Commit current batch
//         batch = writeBatch(db); // Start a new batch
//         operationCount = 0;
//       }
//     }

//     // Commit any remaining operations in the final batch
//     if (operationCount > 0) {
//       await batch.commit();
//     }

//     console.log("Data uploaded successfully");
//   } catch (error) {
//     console.error("Error uploading data:", error);
//   }
// }

// uploadArtistsToFirestore();
