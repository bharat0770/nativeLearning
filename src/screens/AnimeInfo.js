import { Button, Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useRoute } from "@react-navigation/native";
const AnimeInfo = () => {
    const route = useRoute();
    const { data } = route.params;
    return (
        <ScrollView style={{ padding: 20, paddingTop: 40, backgroundColor: "#ebebebff" }}>
            <View style={{
                flex: 1, flexDirection: "row", height: 300, gap: 20, backgroundColor: "white", borderRadius: 10, padding: 16, shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 2
            }}>
                <Image
                    style={{
                        width: "40%",
                        height: "auto",
                        borderRadius: 10,
                    }}
                    // source={require('../../assets/deathNote.jpg')}
                    source={{ uri: data.images.jpg.image_url }}
                />

                <View style={{ width: "60%", flex: 1, alignItems: "flex-start", gap: 10, overflow: "hidden" }}>
                    <Text style={{ fontSize: 24 }}>{data?.title}</Text>
                    <ScrollView style={{ overflow: "scroll", height: 100 }} showsVerticalScrollIndicator={false}>
                        <Text style={{ color: "gray" }}>
                            {data.synopsis}
                        </Text>
                    </ScrollView>

                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: 12,
                                backgroundColor: "orange",
                                borderRadius: 8,
                                flex: 1,
                                marginRight: 10,
                                alignItems: "center"
                            }}
                        >
                            <Text style={{ color: "white" }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            <View
                // style={{
                //     backgroundColor: "white", minHeight: 100, borderRadius: 10, marginTop: 16, shadowColor: "#000",
                //     shadowOffset: { width: 0, height: 4 },
                //     shadowOpacity: 0.3,
                //     shadowRadius: 4,
                //     elevation: 1
                // }}
                className="bg-white rounded-lg p-4 my-2 shadow-lg"
            >
                <View>
                    <View className="flex flex-row justify-between ">
                        <Text className="text-[18px] font-bold">{data.score}</Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${data?.trailer?.embed_url?.split('/')[4].split('?')[0]}`)}
                        >
                            <Text style={{ backgroundColor: "orange", color: "white", width: 100, padding: 8, borderRadius: 10 }}>Open YouTube</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="my-1 flex flex-col gap-2 bg-gray-50 p-4 rounded-lg">
                        <Text className="text-gray-700 text-[16px] capitalize "><Text className="text-gray-500">duration :</Text> {data?.duration}</Text>
                        <Text className="text-gray-700 text-[16px] capitalize "><Text className="text-gray-500">rating :</Text> {data?.rating}</Text>
                        <Text className="text-gray-700 text-[16px] capitalize "><Text className="text-gray-500">score :</Text> {data?.score}</Text>
                        <Text className="text-gray-700 text-[16px] capitalize "><Text className="text-gray-500">scored_by :</Text> {data?.scored_by}</Text>
                        <Text className="text-gray-700 text-[16px] capitalize "><Text className="text-gray-500">rank :</Text> {data?.rank}</Text>
                    </View>
                    <View className="my-1 flex  bg-gray-50 rounded-lg p-4">
                        <Text className="text-gray-700"><Text className="text-gray-500">popularity :</Text> {data?.popularity}</Text>
                        <Text className="text-gray-700"><Text className="text-gray-500">members :</Text> {data?.members}</Text>
                        <Text className="text-gray-700"><Text className="text-gray-500">favorites :</Text> {data?.favorites}</Text>
                        <Text className="text-gray-700"><Text className="text-gray-500">background :</Text> {data?.background}</Text>
                    </View>
                    <View className="my-1 flex  bg-gray-50 rounded-lg p-4">
                        <Text>season : {data?.season}</Text>
                        <Text>year : {data?.year}</Text>
                        <Text>type : {data?.type}</Text>
                        <Text>source : {data?.source}</Text>
                        <Text>episodes : {data?.episodes}</Text>
                    </View>
                    <View className="my-1 flex  bg-gray-50 rounded-lg p-4">
                        <Text>status : {data?.status}</Text>
                        <Text>airing : {data?.airing}</Text>
                        <Text>aried :{data?.aired?.string}</Text>
                    </View>
                    <View className="my-1 flex  bg-gray-50 rounded-lg p-4">
                        <Text>status : {data?.status}</Text>
                        <Text>airing : {data?.airing}</Text>
                        <Text>aried :{data?.aired?.string}</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}
export default AnimeInfo;





//        {
//   "mal_id": 52991,
//   "url": "https://myanimelist.net/anime/52991/Sousou_no_Frieren",
//   "images": {
//     "jpg": {
//       "image_url": "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
//       "small_image_url": "https://cdn.myanimelist.net/images/anime/1015/138006t.jpg",
//       "large_image_url": "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg"
//     },
//     "webp": {
//       "image_url": "https://cdn.myanimelist.net/images/anime/1015/138006.webp",
//       "small_image_url": "https://cdn.myanimelist.net/images/anime/1015/138006t.webp",
//       "large_image_url": "https://cdn.myanimelist.net/images/anime/1015/138006l.webp"
//     }
//   },
//   "trailer": {
//     "youtube_id": null,
//     "url": null,
//     "embed_url": "https://www.youtube-nocookie.com/embed/ZEkwCGJ3o7M?enablejsapi=1&wmode=opaque&autoplay=1",
//     "images": {
//       "image_url": null,
//       "small_image_url": null,
//       "medium_image_url": null,
//       "large_image_url": null,
//       "maximum_image_url": null
//     }
//   },
//   "approved": true,
//   "titles": [
//     {
//       "type": "Default",
//       "title": "Sousou no Frieren"
//     },
//     {
//       "type": "Synonym",
//       "title": "Frieren at the Funeral"
//     },
//     {
//       "type": "Synonym",
//       "title": "Frieren The Slayer"
//     },
//     {
//       "type": "Japanese",
//       "title": "葬送のフリーレン"
//     },
//     {
//       "type": "English",
//       "title": "Frieren: Beyond Journey's End"
//     }
//   ],
//   "title": "Sousou no Frieren",
//   "title_english": "Frieren: Beyond Journey's End",
//   "title_japanese": "葬送のフリーレン",
//   "title_synonyms": [
//     "Frieren at the Funeral",
//     "Frieren The Slayer"
//   ],
//   "type": "TV",
//   "source": "Manga",
//   "episodes": 28,
//   "status": "Finished Airing",
//   "airing": false,
//   "aired": {
//     "from": "2023-09-29T00:00:00+00:00",
//     "to": "2024-03-22T00:00:00+00:00",
//     "prop": {
//       "from": {
//         "day": 29,
//         "month": 9,
//         "year": 2023
//       },
//       "to": {
//         "day": 22,
//         "month": 3,
//         "year": 2024
//       }
//     },
//     "string": "Sep 29, 2023 to Mar 22, 2024"
//   },
//   "duration": "24 min per ep",
//   "rating": "PG-13 - Teens 13 or older",
//   "score": 9.29,
//   "scored_by": 755009,
//   "rank": 1,
//   "popularity": 124,
//   "members": 1255844,
//   "favorites": 78630,
//   "synopsis": "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n\nHowever, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her \"usual\" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n\nAs the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.\n\n[Written by MAL Rewrite]",
//   "background": "Sousou no Frieren was released on Blu-ray and DVD in seven volumes from January 24, 2024, to July 17, 2024. The series aired on Nippon TV's Friday Anime Night block.",
//   "season": "fall",
//   "year": 2023,
//   "broadcast": {
//     "day": "Fridays",
//     "time": "23:00",
//     "timezone": "Asia/Tokyo",
//     "string": "Fridays at 23:00 (JST)"
//   },
//   "producers": [
//     {
//       "mal_id": 17,
//       "type": "anime",
//       "name": "Aniplex",
//       "url": "https://myanimelist.net/anime/producer/17/Aniplex"
//     },
//     {
//       "mal_id": 53,
//       "type": "anime",
//       "name": "Dentsu",
//       "url": "https://myanimelist.net/anime/producer/53/Dentsu"
//     },
//     {
//       "mal_id": 62,
//       "type": "anime",
//       "name": "Shogakukan-Shueisha Productions",
//       "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
//     },
//     {
//       "mal_id": 1003,
//       "type": "anime",
//       "name": "Nippon Television Network",
//       "url": "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network"
//     },
//     {
//       "mal_id": 1143,
//       "type": "anime",
//       "name": "TOHO animation",
//       "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
//     },
//     {
//       "mal_id": 1430,
//       "type": "anime",
//       "name": "Shogakukan",
//       "url": "https://myanimelist.net/anime/producer/1430/Shogakukan"
//     }
//   ],
//   "licensors": [
//     {
//       "mal_id": 1468,
//       "type": "anime",
//       "name": "Crunchyroll",
//       "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
//     }
//   ],
//   "studios": [
//     {
//       "mal_id": 11,
//       "type": "anime",
//       "name": "Madhouse",
//       "url": "https://myanimelist.net/anime/producer/11/Madhouse"
//     }
//   ],
//   "genres": [
//     {
//       "mal_id": 2,
//       "type": "anime",
//       "name": "Adventure",
//       "url": "https://myanimelist.net/anime/genre/2/Adventure"
//     },
//     {
//       "mal_id": 8,
//       "type": "anime",
//       "name": "Drama",
//       "url": "https://myanimelist.net/anime/genre/8/Drama"
//     },
//     {
//       "mal_id": 10,
//       "type": "anime",
//       "name": "Fantasy",
//       "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//     }
//   ],
//   "explicit_genres": [],
//   "themes": [],
//   "demographics": [
//     {
//       "mal_id": 27,
//       "type": "anime",
//       "name": "Shounen",
//       "url": "https://myanimelist.net/anime/genre/27/Shounen"
//     }
//   ]
// },