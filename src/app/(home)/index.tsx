import { InputSearch } from "@/components/app/inputSearch";
import { useState } from "react";
import { Text, View } from "react-native";

interface Item {
  id: number;
  name: string;
  description?: string;
}

const sampleData: Item[] = [
  { id: 1, name: "Apple", description: "A sweet red fruit" },
  {
    id: 2,
    name: "Banana",
    description: "A yellow fruit that is high in potassium",
  },
  {
    id: 3,
    name: "Orange",
    description: "A citrus fruit that is juicy and tangy",
  },
  {
    id: 4,
    name: "Grapes",
    description: "Small, round fruits that grow in bunches",
  },
  {
    id: 5,
    name: "Strawberry",
    description: "A red berry that is sweet and delicious",
  },
  {
    id: 6,
    name: "Mango",
    description: "A tropical fruit that is sweet and juicy",
  },
  {
    id: 7,
    name: "Pineapple",
    description: "A tropical fruit with a spiky exterior",
  },
  {
    id: 8,
    name: "Watermelon",
    description: "A large fruit that is mostly water and refreshing",
  },
  {
    id: 9,
    name: "Blueberry",
    description: "A small, round berry that is blue in color",
  },
  {
    id: 10,
    name: "Peach",
    description: "A soft, sweet fruit with a fuzzy skin",
  },
];

export default function ScreenHome() {
  const [filteredData, setFilteredData] = useState<Item[]>(sampleData);
  const [searchText, setSearchText] = useState<string>("");

  const smallData = ["Item 1", "Item 2", "Item 3"];
  const largeData = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

  const renderItem = ({
    item,
    index,
    separators,
  }: {
    item: string;
    index: number;
    separators: any;
  }) => <Text>{`${index + 1}: ${item}`}</Text>;

  return (
    <View className="flex-1 items-center justify-center w-full px-10 pt-10">
      <InputSearch
        // label="Search Fruits"
        className="h-9 w-full"
        value={searchText}
        data={sampleData}
        searchKeys={["name", "description"]}
        setFilteredData={setFilteredData}
        setValue={setSearchText}
        placeholder="Type to search..."
      />

      {/* {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <View key={item.id}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            {item.description && (
              <Text style={{ color: "gray" }}>{item.description}</Text>
            )}
          </View>
        ))
      ) : (
        <Text style={{ color: "red" }}>
          No results found.
          <Loading />
        </Text>
      )}
      <View className="flex-1">
        <Text>Small List:</Text>
        <OptimizedDataList data={smallData} renderItem={renderItem} />

        <Text>Large List:</Text>
        <OptimizedDataList
          data={largeData}
          renderItem={renderItem}
          onEndReached={() => console.log("Reached the end!")}
        />
      </View> */}
    </View>
  );
}
