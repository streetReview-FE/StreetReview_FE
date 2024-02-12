import { useEffect, useState } from "react";
import styled from "styled-components";
import testEventBanner from "../../../assets/test-eventbanner.png";
import MainReviewCard from "../../Card/MainReviewCard/MainReviewCard";

import MainModal from "../MainModal/MainModal";
const MainMappingReview = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [reviewCardArray, setReviewCardArray] = useState<
    {
      title: string;
      tag: string[];
      date: string;
    }[]
  >([]);
  const [CurrentIndex, setCurrentIndex] = useState<number>(0);
  const Maximumitems = 3;
  useEffect(() => {
    setReviewCardArray([
      {
        title: "한순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        date: "20240105",
      },
      {
        title: "한순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        date: "20240105",
      },
      {
        title: "한순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        date: "20240105",
      },
      {
        title: "두순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        date: "20240105",
      },
      {
        title: "두순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        date: "20240105",
      },
      {
        title: "두순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        date: "20240105",
      },
      {
        title: "세순자손칼국수",
        tag: ["#남대문시장", "#가성비맛집", "#숨은_맛집"],
        date: "20240105",
      },
      // 추가적인 리뷰 카드가 있다면 여기에 계속 추가
    ]);
  }, []);

  return (
    <MainReviewWrapper>
      <MainReviewContainer>
        {reviewCardArray
          .slice(CurrentIndex, CurrentIndex + Maximumitems)
          .map((review, index) => (
            <MainReviewCard
              key={index}
              title={review.title}
              tag={review.tag}
              date={review.date}
            />
          ))}
      </MainReviewContainer>
      {isOpenModal && <MainModal />}
      {/* 이벤트 배너가 들어가는 곳 */}
      <MainReviewContentEventBanner src={testEventBanner} alt="testUser" />
    </MainReviewWrapper>
  );
};

export default MainMappingReview;

const MainReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 2.06rem;
`;

const MainReviewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 38rem;
`;

const MainReviewContentEventBanner = styled.img`
  margin-top: 0.56rem;
  width: 27.25rem;
  height: 4.625rem;
  border-radius: 0.625rem;
  object-fit: cover;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

