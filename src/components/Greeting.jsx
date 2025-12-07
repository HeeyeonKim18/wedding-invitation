import React from "react";
import FadeIn from "./common/FadeIn";

const Greeting = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get("name");

  const title = name
    ? `${name}님, 우리의 시작을 함께 축하해주세요!`
    : "초 대 합 니 다";

  return (
    <section className="py-20 px-6 text-center bg-brand font-serif">
      <FadeIn>
        <div className="max-w-md mx-auto space-y-8 leading-loose text-gray-700">
          <h3 className="text-xl font-bold text-accent mb-8">{title}</h3>
          <p>
            10년이라는 시간 동안
            <br />
            함께 웃고, 함께 자라며
            <br />
            서로에게 가장 든든한 사람이 되었습니다.
          </p>
          <p>
            이제 그 긴 시간을 이어
            <br />
            부부로서의 첫걸음을 내딛습니다
            <br />
            <br />
            {name && (
              <span className="block my-1 font-bold text-gray-900">
                {name}님,
              </span>
            )}
            바쁘시더라도 자리하시어
            <br />
            저희의 시작을 축복해 주시면 감사하겠습니다.
          </p>
        </div>
      </FadeIn>
    </section>
  );
};
export default Greeting;
