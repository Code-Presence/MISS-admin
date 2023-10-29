<tbody>
  {TABLE_ROWS.map(
    (
      { img, name, amount, date, status, account, accountNumber, expiry },
      index
    ) => {
      const isLast = index === TABLE_ROWS.length - 1;
      const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

      return (
        <tr key={name}>
          <td className={classes}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                <User size={28} strokeWidth={3} color="white" />
              </div>
              {/* <Avatar
              src={img}
              alt={name}
              size="md"
              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
            /> */}
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                {name}
              </Typography>
            </div>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {amount}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {date}
            </Typography>
          </td>
          <td className={classes}>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-beauty-green rounded-full" />
              <span>ativo</span>
            </div>
          </td>
          <td className={classes}>
            <div className="flex items-center gap-3">
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  Natal / RN
                </Typography>
              </td>
            </div>
          </td>
          <td className={classes}>
            <EditMenuTable />
          </td>
        </tr>
      );
    }
  )}
</tbody>;

//
//
//

{
  TABLE_ROWS.map(
    (
      { img, name, amount, date, status, account, accountNumber, expiry },
      index
    ) => {
      const isLast = index === TABLE_ROWS.length - 1;
      const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

      return (
        <tr key={name}>
          <td className={classes}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                <User size={28} strokeWidth={3} color="white" />
              </div>
              {/* <Avatar
                src={img}
                alt={name}
                size="md"
                className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
              /> */}
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                {name}
              </Typography>
            </div>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {amount}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {date}
            </Typography>
          </td>
          <td className={classes}>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-beauty-green rounded-full" />
              <span>ativo</span>
            </div>
          </td>
          <td className={classes}>
            <div className="flex items-center gap-3">
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  Natal / RN
                </Typography>
              </td>
            </div>
          </td>
          <td className={classes}>
            <EditMenuTable />
          </td>
        </tr>
      );
    }
  );
}
