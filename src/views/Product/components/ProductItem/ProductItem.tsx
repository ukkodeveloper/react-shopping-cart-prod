import { ProductItemType } from 'types/ProductType';
import * as S from './ProductItem.style';
import { CartQuantityField } from '@views/Cart/components/CartQuantityField';

interface ProductItemProps {
  product: ProductItemType;
}

function ProductItem({ product }: ProductItemProps) {
  const { name, price, imageUrl } = product;
  return (
    <S.ProductItemBox>
      <S.ProductItemImageBox>
        <S.ProductItemImage src={imageUrl} />
      </S.ProductItemImageBox>
      <S.ProductDetails>
        <S.ProductInfo>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductPrice>{price.toLocaleString('ko-KR')}원</S.ProductPrice>
        </S.ProductInfo>
        <CartQuantityField product={product} />
      </S.ProductDetails>
    </S.ProductItemBox>
  );
}
export default ProductItem;
