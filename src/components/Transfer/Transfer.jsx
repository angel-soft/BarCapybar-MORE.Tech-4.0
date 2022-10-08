import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { transferMaticRequest, transferRubleRequest, transferNftRequest } from "../../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";

import "./Transfer.css";

export function Transfer() {

  const { user, users } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const [query, setQuery] = useState(""); 
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [receiver, setReceiver] = useState(null);
  const [amount, setAmount] = useState(0);
  const [currency] = useState(["Ruble", "NFT", "Matic"]);
  const [activeCurrency, setActiveCurrency] = useState(currency[0]);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isDropDownOpen && ref.current && !ref.current.contains(e.target)) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isDropDownOpen]);

  const filteredUsers = users?.filter((user) => {
    if (user.name) {
      if(user.name.toLowerCase().includes(query.toLowerCase())) {
        return true
      }
    }
    return false;
  }
  );

  const chooseReceiver = (user) => {
    setReceiver({
      name: user.name,
      publicKey: user.wallet.publicKey,
    });
    setDropDownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeCurrency === "Ruble") {
      dispatch(transferRubleRequest({
        fromPrivateKey: user.wallet.privateKey,
        toPublicKey: receiver.publicKey,
        amount,
      }))
    }
    else if (activeCurrency === "NFT11") {
      dispatch(transferNftRequest({
        fromPrivateKey: user.wallet.privateKey,
        toPublicKey: receiver.publicKey,
        tokenId: "test",
      }))
    }
    else if (activeCurrency === "Matic") {
      dispatch(transferMaticRequest({
        fromPrivateKey: user.wallet.privateKey,
        toPublicKey: receiver.publicKey,
        amount,
      }))
    }
    else {
      toast("Не удалось выполнить транзакцию");
    }
  };

  return (
    <div className="cardInfo">
      <h3>Отправьте монеты в качестве благодарности</h3>
      <br />
      <div ref={ref}>
      <input
        placeholder="Поиск"
        type="text"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        onClick={() => setDropDownOpen(true)}
      />
        {isDropDownOpen &&
          <div>
            {filteredUsers.length !== 0 ? (
              filteredUsers.map((user) => <div key={user.id} className="pointer">
                <h4 onClick={() => chooseReceiver(user)}>{user.name}</h4>
                </div>)
            ) : (
              <div>Ничего не найдено</div>
            )}
        </div>}
      </div>
      <br />
        {receiver && (
          <>
          <div className="wrapper">
            {currency.map((elem) => elem === activeCurrency ? 
            <span className="badge-currency green-bg">{elem}</span> : 
            <span className="badge-currency pointer" onClick={() => setActiveCurrency(elem)}>{elem}</span>)}
          </div>
          <br />
            <p>Получатель</p>
            <h4>{receiver?.name}</h4>
            <form onSubmit={handleSubmit} className="wrapper between">
              <input
                placeholder="Сколько отправить"
                type="number"
                name="amount"
                onChange={(event) => setAmount(event.target.value)}
                value={amount}
              />
              <button>Отправить</button>
            </form>
          </>
        )}
    </div>
  );
}
