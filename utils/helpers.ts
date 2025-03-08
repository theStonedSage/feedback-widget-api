
export const getFullDocData = (collection: any) =>
  (collection.docs || []).map((doc: any) => ({
    docId: doc.id,
    ...doc.data(),
  }));