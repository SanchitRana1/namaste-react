import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import mock_data from "../mocks/resCardMock.json"
import mock_promoted_data from "../mocks/resCardPromotedMock.json"
import "@testing-library/jest-dom"
import {withPromotedLabel} from "../RestaurantCard"

it("should render Restaurant card component with props data",()=>{
    render(<RestaurantCard resInfo={mock_data}/>)
    const card = screen.getByText("Chinese Wok")
    expect(card).toBeInTheDocument();
})

it("should render Restaurant card component with trending label",()=>{
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resInfo={mock_promoted_data[0]}/>)
    const promotedCard = screen.getByText("Trending");
    // console.log(promotedCard)
    expect(promotedCard).toBeInTheDocument();
})