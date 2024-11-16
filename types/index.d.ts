export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

export type INewUser = {
  name: string;
  email: string;
  password: string;
};

export type carsType =
  | {
      urls: (string | null)[];
      logoUrls: string | null;
      _id: Id<"cars">;
      _creationTime: number;
      brand: string;
      logoId: Id<"_storage">;
      money: number;
      name: string;
      imageIds: Id<"_storage">[];
      typeOfCar: string;
      numberOfViews: number;
      KM_Done: number;
    }[]
  | undefined
  | null;
